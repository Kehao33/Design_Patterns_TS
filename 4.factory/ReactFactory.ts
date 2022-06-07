const createElement = (type: any, config: any) => {
  return { type, props: config };
};

const createFactory = (type: string) => {
  const factory = createElement.bind(null, type);
  return factory;
};

const factory = createFactory("h1");
const element = factory({ id: "h1", className: "title" });
console.log("element", element);
