const supertest = require("supertest");
const app = require("../server");
const fs = require("fs");
const users = require("../assets/user.json");

describe("Testing routing Application", () => {
  beforeAll((done) => {
    global.score = 0;
    done();
  });
  afterAll((done) => {
    done();
  }

  );
  describe("GET /", () => {
    it("should return a 200 response", (done) => {
      supertest(app)
        .get("/")
        .expect(200, done);
    }
    );
    it("should return a html file", (done) => {
      supertest(app)
        .get("/")
        .expect("Content-Type", "text/html", done);
    } 
    );
test("GET /", () => {
    supertest(app)
      .get("/")
      .expect(200)
      .then((response) => {
        let usersHtml = fs.readFileSync(__dirname + "../assets/users.html");
        // Check type and length
        expect(typeof response.text).toBe("string");
        expect(response.text.length).toBe(usersHtml.length);
        // Check content
        expect(response.text).toBe(usersHtml);
        expect(response.body).toBeTruthy();
        expect(response.body).toEqual(usersHtml);
      });
    global.score += 2;
  });
  }
  );
  describe("GET /users", () => {
    it("should return a 200 response", (done) => {
      supertest(app)
        .get("/users")
        .expect(200, done);
    }
    );
    it("should return a json file", (done) => {
      supertest(app)
        .get("/users")
        .expect("Content-Type", "application/json", done);
    }
    );
    
  test("GET /users", () => {
    supertest(app)
      .get("/users")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(response.body).toBeTruthy();
        expect(response.body).toEqual(users);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(99);
      });
    global.score += 2 ; 
  });
  }
  );
  describe("GET /users/:id", () => {
    it("should return a 200 response", (done) => {
      supertest(app)
        .get("/users/1")
        .expect(200, done);
    }
    );
    it("should return a json file", (done) => {
      supertest(app)
        .get("/users/1")
        .expect("Content-Type", "application/json", done);
    }
    );
  test("GET /users/:id", () => {
    supertest(app)
      .get("/users/1")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(response.body).toBeTruthy();
        expect(response.body).toEqual(users[1]);
        expect(response.body.id).toEqual(1);
      });
    global.score += 2;
  });
  }
  );

  afterAll((done) => {
    console.log("Final Score is", global.score);
    done();
  });
});


 