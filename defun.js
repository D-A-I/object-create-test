/* ファクトリメソッド用のオブジェクト
 * ++ Animal ++ */
const Animal = {
    create(type) {
        let animal = Object.create(Animal.prototype);
        animal.type = type;
        return animal;
    },
    isAnimal(obj, type) {
        // objのプロトタイプチェーン上にAnimalが存在するか
        if (!Animal.prototype.isPrototypeOf(obj)) {
            return false;
        }
        return type ? obj.type === type : true;
    },
    prototype: {}
};
/* ファクトリメソッド用のオブジェクト
 * ++ Cat ++ */
const Cat = {
    create(name, bread) {
        let cat = Object.create(Cat.prototype);
        // Animalのパブリックメンバを付与
        Object.assign(cat, Animal.create('Cat'));
        // Catのメンバ変数
        cat.name = name;
        cat.bread = bread;
        return cat;
    },
    isCat(obj) {
        return Animal.isAnimal(obj, 'Cat');
    },
    prototype: {
        sing() {
            console.log('nya nya nya !!');
        },
        introduce() {
            console.log(`My name is '${this.name}' The '${this.bread}'.`);
        }
    }
};

// "prototypeのprototype"を設定
Object.setPrototypeOf(Cat.prototype, Animal.prototype);

// 外部に公開する
module.exports = Cat;
