class TestService {
  constructor() {
    // here we can inject repositoyr to servoce as we follow in express also
  }

  async pingCheck() {
    return "pong";
  }
}

module.exports = TestService ;
