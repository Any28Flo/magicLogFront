interface NavigationLink {
	label: string;
	path: string;
}

interface NavigationLinksByRole {
	[role: string]: NavigationLink[];
}


const navigationLinks: NavigationLinksByRole = {
	admin: [
		{ label: 'productos', path: '/dashboard/productos-admin' },
	],
	vendedor: [
		{ label: 'Agregar productos', path: '/dashboard/agregar' },
		{ label: 'Mis productos', path: '/dashboard/productos' },
	],
	comprador: [
		{ label: 'productos', path: '/dashboard/busqueda' },
	],
};
export default navigationLinks;
