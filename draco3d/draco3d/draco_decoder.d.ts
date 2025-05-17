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
    class DecoderBuffer {
        constructor();
        Init(data: ReadonlyArray<number>, data_size: number): void;
    }
    const ATTRIBUTE_INVALID_TRANSFORM: number;
    const ATTRIBUTE_NO_TRANSFORM: number;
    const ATTRIBUTE_QUANTIZATION_TRANSFORM: number;
    const ATTRIBUTE_OCTAHEDRON_TRANSFORM: number;
    type draco_AttributeTransformType = typeof ATTRIBUTE_INVALID_TRANSFORM | typeof ATTRIBUTE_NO_TRANSFORM | typeof ATTRIBUTE_QUANTIZATION_TRANSFORM | typeof ATTRIBUTE_OCTAHEDRON_TRANSFORM;
    function _emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM(): draco_AttributeTransformType;
    function _emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM(): draco_AttributeTransformType;
    function _emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM(): draco_AttributeTransformType;
    function _emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM(): draco_AttributeTransformType;
    class AttributeTransformData {
        constructor();
        transform_type(): number;
    }
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
    const DT_INVALID: number;
    const DT_INT8: number;
    const DT_UINT8: number;
    const DT_INT16: number;
    const DT_UINT16: number;
    const DT_INT32: number;
    const DT_UINT32: number;
    const DT_INT64: number;
    const DT_UINT64: number;
    const DT_FLOAT32: number;
    const DT_FLOAT64: number;
    const DT_BOOL: number;
    const DT_TYPES_COUNT: number;
    type draco_DataType = typeof DT_INVALID | typeof DT_INT8 | typeof DT_UINT8 | typeof DT_INT16 | typeof DT_UINT16 | typeof DT_INT32 | typeof DT_UINT32 | typeof DT_INT64 | typeof DT_UINT64 | typeof DT_FLOAT32 | typeof DT_FLOAT64 | typeof DT_BOOL | typeof DT_TYPES_COUNT;
    function _emscripten_enum_draco_DataType_DT_INVALID(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_INT8(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_UINT8(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_INT16(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_UINT16(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_INT32(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_UINT32(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_INT64(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_UINT64(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_FLOAT32(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_FLOAT64(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_BOOL(): draco_DataType;
    function _emscripten_enum_draco_DataType_DT_TYPES_COUNT(): draco_DataType;
    class PointAttribute {
        constructor();
        size(): number;
        GetAttributeTransformData(): AttributeTransformData;
        attribute_type(): number;
        data_type(): number;
        num_components(): number;
        normalized(): boolean;
        byte_stride(): number;
        byte_offset(): number;
        unique_id(): number;
    }
    class AttributeQuantizationTransform {
        constructor();
        InitFromAttribute(att: PointAttribute): boolean;
        quantization_bits(): number;
        min_value(axis: number): number;
        range(): number;
    }
    class AttributeOctahedronTransform {
        constructor();
        InitFromAttribute(att: PointAttribute): boolean;
        quantization_bits(): number;
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
    }
    class Metadata {
        constructor();
    }
    const OK: number;
    const DRACO_ERROR: number;
    const IO_ERROR: number;
    const INVALID_PARAMETER: number;
    const UNSUPPORTED_VERSION: number;
    const UNKNOWN_VERSION: number;
    type draco_StatusCode = typeof OK | typeof DRACO_ERROR | typeof IO_ERROR | typeof INVALID_PARAMETER | typeof UNSUPPORTED_VERSION | typeof UNKNOWN_VERSION;
    function _emscripten_enum_draco_StatusCode_OK(): draco_StatusCode;
    function _emscripten_enum_draco_StatusCode_DRACO_ERROR(): draco_StatusCode;
    function _emscripten_enum_draco_StatusCode_IO_ERROR(): draco_StatusCode;
    function _emscripten_enum_draco_StatusCode_INVALID_PARAMETER(): draco_StatusCode;
    function _emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION(): draco_StatusCode;
    function _emscripten_enum_draco_StatusCode_UNKNOWN_VERSION(): draco_StatusCode;
    class Status {
        code(): draco_StatusCode;
        ok(): boolean;
        error_msg(): string;
    }
    class DracoFloat32Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class DracoInt8Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class DracoUInt8Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class DracoInt16Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class DracoUInt16Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class DracoInt32Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class DracoUInt32Array {
        constructor();
        GetValue(index: number): number;
        size(): number;
    }
    class MetadataQuerier {
        constructor();
        HasEntry(metadata: Metadata, entry_name: string): boolean;
        GetIntEntry(metadata: Metadata, entry_name: string): number;
        GetIntEntryArray(metadata: Metadata, entry_name: string, out_values: DracoInt32Array): void;
        GetDoubleEntry(metadata: Metadata, entry_name: string): number;
        GetStringEntry(metadata: Metadata, entry_name: string): string;
        NumEntries(metadata: Metadata): number;
        GetEntryName(metadata: Metadata, entry_id: number): string;
    }
    class Decoder {
        constructor();
        DecodeArrayToPointCloud(data: ReadonlyArray<number>, data_size: number, out_point_cloud: PointCloud): Status;
        DecodeArrayToMesh(data: ReadonlyArray<number>, data_size: number, out_mesh: Mesh): Status;
        GetAttributeId(pc: PointCloud, type: draco_GeometryAttribute_Type): number;
        GetAttributeIdByName(pc: PointCloud, name: string): number;
        GetAttributeIdByMetadataEntry(pc: PointCloud, name: string, value: string): number;
        GetAttribute(pc: PointCloud, att_id: number): PointAttribute;
        GetAttributeByUniqueId(pc: PointCloud, unique_id: number): PointAttribute;
        GetMetadata(pc: PointCloud): Metadata;
        GetAttributeMetadata(pc: PointCloud, att_id: number): Metadata;
        GetFaceFromMesh(m: Mesh, face_id: number, out_values: DracoInt32Array): boolean;
        GetTriangleStripsFromMesh(m: Mesh, strip_values: DracoInt32Array): number;
        GetTrianglesUInt16Array(m: Mesh, out_size: number, out_values: unknown): boolean;
        GetTrianglesUInt32Array(m: Mesh, out_size: number, out_values: unknown): boolean;
        GetAttributeFloat(pa: PointAttribute, att_index: number, out_values: DracoFloat32Array): boolean;
        GetAttributeFloatForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoFloat32Array): boolean;
        GetAttributeIntForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoInt32Array): boolean;
        GetAttributeInt8ForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoInt8Array): boolean;
        GetAttributeUInt8ForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoUInt8Array): boolean;
        GetAttributeInt16ForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoInt16Array): boolean;
        GetAttributeUInt16ForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoUInt16Array): boolean;
        GetAttributeInt32ForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoInt32Array): boolean;
        GetAttributeUInt32ForAllPoints(pc: PointCloud, pa: PointAttribute, out_values: DracoUInt32Array): boolean;
        GetAttributeDataArrayForAllPoints(pc: PointCloud, pa: PointAttribute, data_type: draco_DataType, out_size: number, out_values: unknown): boolean;
        SkipAttributeTransform(att_type: draco_GeometryAttribute_Type): void;
        GetEncodedGeometryType_Deprecated(in_buffer: DecoderBuffer): draco_EncodedGeometryType;
        DecodeBufferToPointCloud(in_buffer: DecoderBuffer, out_point_cloud: PointCloud): Status;
        DecodeBufferToMesh(in_buffer: DecoderBuffer, out_mesh: Mesh): Status;
    }
}