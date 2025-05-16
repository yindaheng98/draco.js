import { createEncoderModule, EncoderModule, Encoder as DracoEncoder, Mesh, DracoInt8Array } from './draco3d';

export class Encoder {
  private module: EncoderModule | null = null;
  private encoder: DracoEncoder | null = null;
  private initializationPromise: Promise<void> | null = null;

  constructor() {
    this.initializationPromise = this.initialize();
  }

  private async initialize(): Promise<void> {
    this.module = await createEncoderModule();
    this.encoder = new this.module.Encoder();
  }

  public async waitInitialization(): Promise<void> {
    if (this.initializationPromise) {
      await this.initializationPromise;
      this.initializationPromise = null;
    }
  }

  public async encode(mesh: Mesh): Promise<ArrayBuffer> {
    await this.waitInitialization();
    if (!this.module || !this.encoder) {
      throw new Error('Encoder not initialized');
    }

    // Set encoding options
    this.encoder.SetSpeedOptions(5, 5); // Speed options (0-10)
    this.encoder.SetAttributeQuantization(this.module.POSITION, 10); // Position quantization
    this.encoder.SetEncodingMethod(this.module.MESH_EDGEBREAKER_ENCODING);

    // Create buffer for encoded data
    const dracoBuffer = new this.module.DracoInt8Array();
    
    // Encode the mesh
    const encodedLength = this.encoder.EncodeMeshToDracoBuffer(mesh, dracoBuffer);
    
    if (encodedLength <= 0) {
      throw new Error('Encoding failed');
    }

    // Copy encoded data to ArrayBuffer
    const outputBuffer = new ArrayBuffer(encodedLength);
    const outputData = new Int8Array(outputBuffer);
    for (let i = 0; i < encodedLength; ++i) {
      outputData[i] = dracoBuffer.GetValue(i);
    }

    // Clean up
    this.module.destroy(dracoBuffer);
    
    return outputBuffer;
  }
}
