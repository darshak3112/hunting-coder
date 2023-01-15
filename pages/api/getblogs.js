// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      console.log({err:req.query.slug,err})
      res.status(500).json({ err: "No such blog found" })
    }
    else {
      res.status(200).json(JSON.parse(data))
    }
  })
}
