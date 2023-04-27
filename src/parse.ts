export interface parseOpts {
	fetchFromJsDelivr: boolean | "on" | "off";
}

export function parseURL(url: string, opts?: parseOpts) {
	const { fetchFromJsDelivr } = opts || {};
	let target: URL;
	try {
		target = new URL(url);
	} catch (_error) {
		target = new URL(decodeURIComponent(url));
	}

	const lineSplit = target.hash.split("-");
	const startLine =
		(target.hash !== "" && lineSplit[0].replace("#L", "")) || -1;
	const endLine =
		(target.hash !== "" &&
			lineSplit.length > 1 &&
			lineSplit[1].replace("L", "")) ||
		startLine;
	const tabSize = target.searchParams.get("ts") || 8;
	const pathSplit = target.pathname.split("/");
	const user = pathSplit[1];
	const repository = pathSplit[2];
	const branch = pathSplit[4];
	const filePath = pathSplit.slice(5, pathSplit.length).join("/");
	const directoryPath = pathSplit.slice(5, pathSplit.length - 1).join("/");
	const fileExtension =
		filePath.split(".").length > 1 ? filePath.split(".").pop() : "txt";
	const fileURL = target.href;
	//const serviceProvider = new URL("./", sourceURL.href).href;
	const rawFileURL = fetchFromJsDelivr
		? `https://cdn.jsdelivr.net/gh/${user}/${repository}@${branch}/${filePath}`
		: `https://raw.githubusercontent.com/${user}/${repository}/${branch}/${filePath}`;
	const rawDirectoryURL = fetchFromJsDelivr
		? `https://cdn.jsdelivr.net/gh/${user}/${repository}@${branch}/${directoryPath}/`
		: `https://raw.githubusercontent.com/${user}/${repository}/${branch}/${directoryPath}/`;
}
