const { dracoAttributesInfo } = require('./draco3d/attributes');
const DracoEncoder = require('./encoder');
const DracoDecoder = require('./decoder');
module.exports = {
    DracoEncoder,
    DracoDecoder,
    dracoAttributesInfo,
};