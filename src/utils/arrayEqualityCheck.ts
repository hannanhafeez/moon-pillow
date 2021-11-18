function objectsAreSame<T>(x:T, y:T) {
	var objectsAreSame = true;
	for (var propertyName in x) {
		if (x[propertyName] !== y[propertyName]) {
			objectsAreSame = false;
			break;
		}
	}
	return objectsAreSame;
}

const objectsEqual = (o1:any, o2:any) =>
	Object.keys(o1).length === Object.keys(o2).length
	&& Object.keys(o1).every(p => o1[p] === o2[p]);

export function areArraysEqual<T>(a: T[], b: T[]){
	return (a.length === b.length) && a.reduce((acc, curr, ind) => { return acc ? objectsAreSame(a[ind], b[ind]) : false }, true)
}