import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../src/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // Process a POST request
        const data = await prisma.shortLink.create({
            data: {
              url: req.body.url,
              slug: req.body.keyword,
            },
          })
          if(data){
              return res.json({
                  success: true,
                    message: "Short link created successfully",
              })
          }
          return res.json({
              success: false,
                message: "Short link creation failed",
          })
      }

}