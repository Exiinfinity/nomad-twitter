import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import client from "../../../libs/server/db";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  // check user
  const checkUser = await client.user.findUnique({
    where: {
      email,
    },
  });

  if (!checkUser) {
    return res.status(400).json({ ok: false });
  }

  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connect:{
          id: checkUser.id
        },
      },
    },
  });

  console.log(`### Authentication Code : ${payload} ###`, token);

  return res.status(200).json({
    ok: true,
  });
}

// nextjs에서 api route를 만들 때는 그 function을 return하는 것이 필수!!
export default withHandler({
  methods: ["POST"],
  handler,
});
