import { DecoderModule as M } from './draco3d';

export class Decoder {
  private module: typeof M | null = null;
  private decoder: M.Decoder | null = null;
  private initializationPromise: Promise<void> | null = null;

  constructor() {
    this.initializationPromise = this.initialize();
  }

  private async initialize(): Promise<void> {
    this.module = await M({});
    this.decoder = new this.module.Decoder();
  }

  public async waitInitialization(): Promise<void> {
    if (this.initializationPromise) {
      await this.initializationPromise;
      this.initializationPromise = null;
    }
  }

  public async decode(data: ReadonlyArray<number>): Promise<M.Mesh | M.PointCloud> {
    await this.waitInitialization();
    if (!this.module || !this.decoder) {
      throw new Error('Decoder not initialized');
    }

    const geometryType = this.decoder.GetEncodedGeometryType(data);
    let geometry: M.Mesh | M.PointCloud;

    if (geometryType === this.module.TRIANGULAR_MESH) {
      const local_geometry = new this.module.Mesh();
      const status = this.decoder.DecodeArrayToMesh(data, data.length, local_geometry);
      if (!status.ok()) {
        throw new Error(`Decoding failed: ${status.error_msg()}`);
      }
      geometry = local_geometry;
    } else if (geometryType === this.module.POINT_CLOUD) {
      const local_geometry = new this.module.PointCloud();
      const status = this.decoder.DecodeArrayToPointCloud(data, data.length, local_geometry);
      if (!status.ok()) {
        throw new Error(`Decoding failed: ${status.error_msg()}`);
      }
      geometry = local_geometry;
    } else {
      throw new Error('Unknown geometry type');
    }

    return geometry;
  }

  public destroy(geometry: M.Mesh | M.PointCloud): void {
    if (this.module) {
      this.module.destroy(geometry);
    }
  }
}
