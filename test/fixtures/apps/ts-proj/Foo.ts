function FooDecorator() {
  return function (target: any) {
    console.log('decorator to class: ', target);
  }
}

@FooDecorator()
export class Foo {
  demoError() {
    try {

    } catch (err) {
      if (err instanceof TypeError) {
        console.log('type error');
      }
    }
  }
}
