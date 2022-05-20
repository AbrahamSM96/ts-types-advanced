let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = '12';
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNwe: boolean = anyVar;

anyVar.doSomething();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = '12';
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

if (typeof unknowVar === 'string') {
  unknowVar.toLocaleUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNewVersion2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
