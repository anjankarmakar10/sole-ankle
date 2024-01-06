interface ImageFormats {
  thumbnail: {
    name: string;
    url: string;
  };
  medium: {
    name: string;
    url: string;
  };
  small: {
    name: string;
    url: string;
  };
}

interface ImageData {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}

interface SubCategory {
  id: number;
  attributes: {
    name: string;
  };
}

interface Color {
  id: number;
  attributes: {
    name: string;
    code: string;
  };
}

interface Size {
  id: number;
  attributes: {
    number: string;
  };
}

interface Response {
  data: Shoe[];
  meta: Meta;
}

interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface Category {
  id: number;
  attributes: {
    name: string;
  };
}

interface Shoe {
  id: number;
  attributes: {
    name: string;
    description: any;
    new: boolean;
    price: number;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    image: { data: ImageData };
    categories: { data: Category[] };
    subCategories: { data: SubCategory[] };
    colors: { data: Color[] };
    sizes: { data: Size[] };
  };
}
