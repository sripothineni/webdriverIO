describe("Feature : This is a samle test", () => {

    before("Login app", () => {
        console.log("Login to application");
    });

    beforeEach("Before each", () => {
        console.log("Execution before each test");
    });

    describe("Valid tests", () => {
        it("User should be able to login with valid credentials", () => {
            console.log("Login test 1");
        });

        it.only("User should be able to login with valid credentials", () => {
            console.log("Login test 2");
        });

    });

    describe("Invalid tests", () => {
        it.only("User should not be able to login with Invalid credentials", () => {
            console.log("Login test 3");
        });

        it.skip("User should not be able to login with Invalid credentials", () => {
            console.log("Login test 4");
        });
    })

    afterEach("After Each test", () => {
        console.log("Executes after each test");
    });

    after("Logout app", () => {
        console.log("Logout from application");
    });
});