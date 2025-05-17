export default Module;
declare function Module<T>(target?: T): Promise<T & typeof Module>;
declare module Module {
    function destroy(obj: any): void;
    function _malloc(size: number): number;
    function _free(ptr: number): void;
    function wrapPointer<C extends new (...args: any) => any>(ptr: number, Class: C): InstanceType<C>;
    function getPointer(obj: unknown): number;
    function castObject<C extends new (...args: any) => any>(object: unknown, Class: C): InstanceType<C>;
    function compare(object1: unknown, object2: unknown): boolean;
    const HEAP8: Int8Array;
    const HEAP16: Int16Array;
    const HEAP32: Int32Array;
    const HEAPU8: Uint8Array;
    const HEAPU16: Uint16Array;
    const HEAPU32: Uint32Array;
    const HEAPF32: Float32Array;
    const HEAPF64: Float64Array;
    const INVALID: number;
    const POSITION: number;
    const NORMAL: number;
    const COLOR: number;
    const TEX_COORD: number;
    const GENERIC: number;
    type draco_GeometryAttribute_Type = typeof INVALID | typeof POSITION | typeof NORMAL | typeof COLOR | typeof TEX_COORD | typeof GENERIC;
    function _emscripten_enum_draco_GeometryAttribute_Type_INVALID(): draco_GeometryAttribute_Type;
    function _emscripten_enum_draco_GeometryAttribute_Type_POSITION(): draco_GeometryAttribute_Type;
    function _emscripten_enum_draco_GeometryAttribute_Type_NORMAL(): draco_GeometryAttribute_Type;
    function _emscripten_enum_draco_GeometryAttribute_Type_COLOR(): draco_GeometryAttribute_Type;
    function _emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD(): draco_GeometryAttribute_Type;
    function _emscripten_enum_draco_GeometryAttribute_Type_GENERIC(): draco_GeometryAttribute_Type;
    class GeometryAttribute {
        constructor();
    }
    const INVALID_GEOMETRY_TYPE: number;
    const POINT_CLOUD: number;
    const TRIANGULAR_MESH: number;
    type draco_EncodedGeometryType = typeof INVALID_GEOMETRY_TYPE | typeof POINT_CLOUD | typeof TRIANGULAR_MESH;
    function _emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE(): draco_EncodedGeometryType;
    function _emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD(): draco_EncodedGeometryType;
    function _emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH(): draco_EncodedGeometryType;
    const MESH_SEQUENTIAL_ENCODING: number;
    const MESH_EDGEBREAKER_ENCODING: number;
    type draco_MeshEncoderMethod = typeof MESH_SEQUENTIAL_ENCODING | typeof MESH_EDGEBREAKER_ENCODING;
    function _emscripten_enum_draco_MeshEncoderMethod_MESH_SEQUENTIAL_ENCODING(): draco_MeshEncoderMethod;
    function _emscripten_enum_draco_MeshEncoderMethod_MESH_EDGEBREAKER_ENCODING(): draco_MeshEncoderMethod;
    class PointAttribute {
        constructor();
        size(): number;
        attribute_type(): number;
        data_type(): number;
        num_components(): number;
        normalized(): boolean;
        byte_stride(): number;
        byte_offset(): number;
        unique_id(): number;
    }
    class PointCloud {
        constructor();
        num_attributes(): number;
        num_points(): number;
    }
    class Mesh extends PointCloud {
        constructor();
        num_faces(): number;
        num_attributes(): number;
        num_points(): number;
        set_num_points(num_points: number): void;
    }
    class Metadata {
        constructor();
    }
    class DracoInt8Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class MetadataBuilder {
        constructor();
        AddStringEntry(metadata: Metadata, entry_name: string, entry_value: string): boolean;
        AddIntEntry(metadata: Metadata, entry_name: string, entry_value: number): boolean;
        AddIntEntryArray(metadata: Metadata, entry_name: string, att_values: ReadonlyArray<number>, num_values: number): boolean;
        AddDoubleEntry(metadata: Metadata, entry_name: string, entry_value: number): boolean;
    }
    class PointCloudBuilder {
        constructor();
        AddFloatAttribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt8Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddUInt8Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt16Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddUInt16Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt32Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddUInt32Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddMetadata(pc: PointCloud, metadata: Metadata): boolean;
        SetMetadataForAttribute(pc: PointCloud, attribute_id: number, metadata: Metadata): boolean;
        SetNormalizedFlagForAttribute(pc: PointCloud, attribute_id: number, normalized: boolean): boolean;
    }
    class MeshBuilder extends PointCloudBuilder {
        constructor();
        AddFacesToMesh(mesh: Mesh, num_faces: number, faces: ReadonlyArray<number>): boolean;
        AddFloatAttributeToMesh(mesh: Mesh, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt32AttributeToMesh(mesh: Mesh, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddMetadataToMesh(mesh: Mesh, metadata: Metadata): boolean;
        AddFloatAttribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt8Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddUInt8Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt16Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddUInt16Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddInt32Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddUInt32Attribute(pc: PointCloud, type: draco_GeometryAttribute_Type, num_vertices: number, num_components: number, att_values: ReadonlyArray<number>): number;
        AddMetadata(pc: PointCloud, metadata: Metadata): boolean;
        SetMetadataForAttribute(pc: PointCloud, attribute_id: number, metadata: Metadata): boolean;
        SetNormalizedFlagForAttribute(pc: PointCloud, attribute_id: number, normalized: boolean): boolean;
    }
    class Encoder {
        constructor();
        SetEncodingMethod(method: number): void;
        SetAttributeQuantization(type: draco_GeometryAttribute_Type, quantization_bits: number): void;
        SetAttributeExplicitQuantization(type: draco_GeometryAttribute_Type, quantization_bits: number, num_components: number, origin: ReadonlyArray<number>, range: number): void;
        SetSpeedOptions(encoding_speed: number, decoding_speed: number): void;
        SetTrackEncodedProperties(flag: boolean): void;
        EncodeMeshToDracoBuffer(mesh: Mesh, encoded_data: DracoInt8Array): number;
        EncodePointCloudToDracoBuffer(pc: PointCloud, deduplicate_values: boolean, encoded_data: DracoInt8Array): number;
        GetNumberOfEncodedPoints(): number;
        GetNumberOfEncodedFaces(): number;
    }
    class ExpertEncoder {
        constructor(pc: PointCloud);
        SetEncodingMethod(method: number): void;
        SetAttributeQuantization(att_id: number, quantization_bits: number): void;
        SetAttributeExplicitQuantization(att_id: number, quantization_bits: number, num_components: number, origin: ReadonlyArray<number>, range: number): void;
        SetSpeedOptions(encoding_speed: number, decoding_speed: number): void;
        SetTrackEncodedProperties(flag: boolean): void;
        EncodeToDracoBuffer(deduplicate_values: boolean, encoded_data: DracoInt8Array): number;
        GetNumberOfEncodedPoints(): number;
        GetNumberOfEncodedFaces(): number;
    }
}