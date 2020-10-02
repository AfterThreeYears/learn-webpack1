const assert = require('assert');
const path = require('path');
const { ConcatSource } = require("webpack-sources");

function isJavascript(filename) {
  return path.extname(filename) === '.js';
}

module.exports = class EasySourceMapPlugin {
  constructor(options) {
    assert(options.hostname, 'hostname is must');
    this.hostname = options.hostname;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("EasySourceMapPlugin", compilation => {
			compilation.hooks.afterOptimizeChunkAssets.tap("EasySourceMapPlugin", chunks => {
				for (const chunk of chunks) {
					for (const file of chunk.files) {
            if (!isJavascript(file)) return;
            const source = compilation.getAsset(file).source;
						compilation.updateAsset(
							file,
							new ConcatSource(
                source,
                `\n//# sourceMappingURL=${this.hostname}/${chunk.name}.js.map`,
              )
						);
					}
				}
			});
		});
  }
}