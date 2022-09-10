/**
 * 对象响应式
 * 每个对象具有多个属性，每个属性都有自己的dep
 */
 const targetMap = new WeakMap();
 let total = 0;
 const effect = () => { total = product.price * product.quantity };
 const track = (target, key) => { 
   let depsMap = targetMap.get(target);
   if(!depsMap){
     targetMap.set(target, (depsMap = new Map()));
   }
   let dep = depsMap.get(key);
   if(!dep) {
     depsMap.set(key, (dep = new Set()));
   }
   dep.add(effect);
   console.log('副作用', dep);
 }
 
 const trigger = (target, key) => {
  const depsMap = targetMap.get(target);
  if(!depsMap) return;
    let dep = depsMap.get(key);
  if(dep) {
    dep.forEach( effect => effect() );
  }
};

const reactive = (target) => {
  const handler = {
    get(target, key, receiver){
      console.log('正在读取的数据：',key);
      const result = Reflect.get(target, key, receiver);
      track(target, key);  // 自动调用 track 方法收集依赖
      return result;
    },
    set(target, key, value, receiver){
      console.log('正在修改的数据：', key, ',值为：', value);
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if(oldValue != result){
         trigger(target, key);  // 自动调用 trigger 方法执行依赖
      }
      return result;
    }
  }
  
  return new Proxy(target, handler);
}

let product = reactive({price: 10, quantity: 2}); 
effect();
console.log(total); 
product.price = 20;
product.price = 40;
console.log(total);