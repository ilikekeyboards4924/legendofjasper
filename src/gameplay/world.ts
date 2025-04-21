import { Entity } from "./entity.js";

export class World {
    entities: Entity[];

    constructor() {
        this.entities = [];
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    removeEntity(entityIndex: number, hide: boolean = false) {
        this.entities.forEach((entity, i) => {
            if (entity.entityIndex == entityIndex) {
                if (hide == true) this.entities[i].setVisibility(false);
                this.entities.splice(i, 1);
                return;
            }
        });
    }

    update() {

    }
}