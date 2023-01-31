import { validateEmail } from "@/helpers/email";
import { validatePassword } from "@/helpers/password";
import type { NextApiRequest, NextApiResponse } from "next";

const validate = (body: NextApiRequest["body"]) => {
  if (!validateEmail(body.email)) {
    return false;
  }

  if (!validatePassword(body.password)) {
    return false;
  }

  return true;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    if (!validate(data)) {
      return res.status(400).send({ error: "Invalid payload" });
    }

    res.status(200).send({ message: "User signed up successfully." });
  }
}
