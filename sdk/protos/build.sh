OUT_DIR="./generated"
mkdir -p ${OUT_DIR}

PROTOC_GEN_TS_PATH="../../node_modules/.bin/protoc-gen-ts"

./protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    *.proto