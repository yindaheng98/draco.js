// \home\yindaheng98\cags-draco\example.ts
import * as fs from 'fs';
import { Encoder, Decoder } from './draco3d';

async function main() {
  try {
    const decoder = new Decoder();
    const encoder = new Encoder();

    // Wait for both modules to initialize
    await Promise.all([
      decoder.waitInitialization(),
      encoder.waitInitialization()
    ]);

    // Read the Draco file
    const rawData = fs.readFileSync('./bunny.drc');
    console.log(`Decoding file of size ${rawData.byteLength} ..`);

    // Decode mesh
    const decodedGeometry = await decoder.decode(rawData);

    // Check if it's a mesh
    if ('num_faces' in decodedGeometry) {
      console.log(`Decoded geometry: ${decodedGeometry.num_faces()} faces, ${decodedGeometry.num_points()} points`);

      // Encode mesh
      const encodedData = await encoder.encode(decodedGeometry);
      console.log(`Encoded size is ${encodedData.byteLength}`);

      // Write to file
      fs.writeFileSync('bunny_10.drc', Buffer.from(encodedData), 'binary');
      console.log('The file was saved!');
    } else {
      console.log(`Decoded point cloud: ${decodedGeometry.num_points()} points`);
    }

    // Clean up
    decoder.destroy(decodedGeometry);
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);