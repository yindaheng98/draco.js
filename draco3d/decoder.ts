import { createDecoderModule, DecoderModule, Decoder as DracoDecoder, Mesh, PointCloud } from './draco3d';

export class Decoder {
  private module: DecoderModule | null = null;
  private decoder: DracoDecoder | null = null;
  private initializationPromise: Promise<void> | null = null;

  constructor() {
    this.initializationPromise = this.initialize();
  }

  private async initialize(): Promise<void> {
    this.module = await createDecoderModule();
    this.decoder = new this.module.Decoder();
  }

  public async waitInitialization(): Promise<void> {
    if (this.initializationPromise) {
      await this.initializationPromise;
      this.initializationPromise = null;
    }
  }

  public async decode(data: ArrayBuffer): Promise<Mesh | PointCloud> {
    await this.waitInitialization();
    if (!this.module || !this.decoder) {
      throw new Error('Decoder not initialized');
    }

    const buffer = new this.module.DecoderBuffer();
    buffer.Init(new Int8Array(data), data.byteLength);

    const geometryType = this.decoder.GetEncodedGeometryType(buffer);
    let geometry: Mesh | PointCloud;

    if (geometryType === this.module.TRIANGULAR_MESH) {
      const local_geometry = new this.module.Mesh();
      const status = this.decoder.DecodeBufferToMesh(buffer, local_geometry);
      if (!status.ok()) {
        throw new Error(`Decoding failed: ${status.error_msg()}`);
      }
      geometry = local_geometry;
    } else if (geometryType === this.module.POINT_CLOUD) {
      const local_geometry = new this.module.PointCloud();
      const status = this.decoder.DecodeBufferToPointCloud(buffer, local_geometry);
      if (!status.ok()) {
        throw new Error(`Decoding failed: ${status.error_msg()}`);
      }
      geometry = local_geometry;
    } else {
      throw new Error('Unknown geometry type');
    }

    this.module.destroy(buffer);
    return geometry;
  }

  public destroy(geometry: Mesh | PointCloud): void {
    if (this.module) {
      this.module.destroy(geometry);
    }
  }
}
