type Constructor<T = any> = new (...args: any[]) => T;

export default class Container {
    private dependencies: Map<Constructor, any>;

    constructor() {
        this.dependencies = new Map();
    }

    register<T>(dependency: Constructor<T>, instance: T): void {
        this.dependencies.set(dependency, instance);
    }

    get<T>(dependency: Constructor<T>): T {
        const instance = this.dependencies.get(dependency);
        if (!instance) {
            throw new Error(`Dependency not registered: ${dependency.name}`);
        }
        return instance;
    }
}