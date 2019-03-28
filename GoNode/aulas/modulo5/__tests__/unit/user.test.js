const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Ebner",
      email: "ebner.suporte@hotmail.com",
      password: "123456"
    });

    const compareHash = await bcrypt.compare("123456", user.pasword_hash);

    expect(compareHash).toBe(true);
  });
});
