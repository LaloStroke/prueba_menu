declare interface MenuItem {
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
}

declare interface RootObject {
  items: MenuItem[];
}
