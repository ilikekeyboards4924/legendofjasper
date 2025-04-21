export class World {
    constructor() {
        this.entities = [];
    }
    addEntity(entity) {
        this.entities.push(entity);
    }
    removeEntity(entityIndex, hide = false) {
        this.entities.forEach((entity, i) => {
            if (entity.entityIndex == entityIndex) {
                if (hide == true)
                    this.entities[i].setVisibility(false);
                this.entities.splice(i, 1);
                return;
            }
        });
    }
    update() {
    }
}
