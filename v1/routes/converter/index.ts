import sharp from "sharp";
import express, { Request, Response, Router } from "express";
const converter = Router();

converter.get("/", async (req: Request, res: Response) => {
    
    sharp()
  .resize(200, 300, {
      kernel: sharp.kernel.nearest,
    fit: "contain",
    position: "right top",
    background: { r: 255, g: 255, b: 255, alpha: 0.5 }
  })
  .toFile("output.png")
  .then(() => {
      res.send(__dirname);
    // output.png is a 200 pixels wide and 300 pixels high image
    // containing a nearest-neighbour scaled version
    // contained within the north-east corner of a semi-transparent white canvas
  });
});



function ConvertToNumber (arg:string|number):number {
    const value = ((arg as unknown) as number);
    return value;
}
// ConvertToNumber(req.query.height as string)
export default converter;