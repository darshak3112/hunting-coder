// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
    allblogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allblogs)


  // fs.promises.readdir('blogdata', (err, data) => {
  //   let allblogs = [];
  //   console.log(data);
  //   data.forEach((item) => {
  //     console.log(item);
  //     fs.readFile((`blogpost/${item}.json`), (d) => {
  //       allblogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allblogs)
  // })
}
