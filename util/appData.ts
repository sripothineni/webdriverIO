import app_data from "../test/data/appData.json";

type Environment = keyof typeof app_data.urls;

function isValidEnv(env: string): env is Environment {
    return Object.keys(app_data.urls).includes(env);
}

class AppData {
    private env: Environment;

    constructor() {
        const envInput = process.env.env || 'qa';

        if (!isValidEnv(envInput)) {
            throw new Error(`Invalid environment: ${envInput}. Valid options: ${Object.keys(app_data.urls).join(', ')}`);
        }

        this.env = envInput;
    }

    get url(): string {
        return app_data.urls[this.env];
    }

    get credentials(): { username: string; password: string } | null {
        const user = app_data.users.find(u => u.env === this.env);
        return user ? { username: user.username, password: user.password } : null;
    }
    get environment(): string{
        return this.env;
    }
}

export default new AppData();
