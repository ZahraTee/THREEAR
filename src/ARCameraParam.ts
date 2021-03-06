import ARToolkit from "./ARToolkitAPI";

/**
 * ARCameraParam is used for loading AR camera parameters for use with ARController.
 * Use by passing in an URL and a callback function.
 * var camera = new ARCameraParam('Data/camera_para.dat', function() {
 * 	 console.log('loaded camera', this.id);
 * },
 * function(err) {
 *   console.log('failed to load camera', err);
 * });
 * @exports ARCameraParam
 * @constructor
 * @param {string} src URL to load camera parameters from.
 * @param {string} onload Onload callback to be called on successful parameter loading.
 * @param {string} onerror Error callback to called when things don't work out.
 */
export class ARCameraParam {

	private id: number;
	private _src: string;
	private complete: boolean;
	private onload: () => void;
	private onerror: (error: Error) => void;

	constructor(src, onload, onerror) {
		this.id = -1;
		this._src = "";
		this.complete = false;
		this.onload = onload;
		this.onerror = onerror;
		if (src) {
			this.load(src);
		}
	}

	/**
	 * Loads the given URL as camera parameters definition file into this ARCameraParam.
	 * Can only be called on an unloaded ARCameraParam instance.
	 * @param {string} src URL to load.
	 */
	public load(src) {
		if (this._src !== "") {
			throw new Error(("ARCameraParam: Trying to load camera parameters twice."));
		}
		this._src = src;
		if (src) {
			ARToolkit.loadCamera(src, (id) => {
				this.id = id;
				this.complete = true;
				this.onload();
			}, (err) => {
				this.onerror(err);
			});
		}
	}

	get src() {
		return this._src;
	}

	set src(src: string) {
		this.load(src);
	}

	/**
	 * Destroys the camera parameter and frees associated Emscripten resources.
	 */
	public dispose() {
		if (this.id !== -1) {
			ARToolkit.deleteCamera(this.id);
		}
		this.id = -1;
		this._src = "";
		this.complete = false;
	}

}

export default ARCameraParam;
