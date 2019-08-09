export function log(target, name, descriptor) {

  const method = descriptor.value;

  descriptor.value = function () {
    console.log(`before ${name}`);
    const result = method.apply(this, arguments);
    console.log(`after ${name}`);
    return result;
  };

  return descriptor;
}