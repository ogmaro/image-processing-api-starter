import path from 'path';

const ConvertToNumber = (arg?: string | number): number => {
  const value = arg as unknown as number;
  return value ? value : 320;
};
function filePathInput(file?: string, type?: string): string {

  if (file) {
    return path.resolve(
      path.join(__dirname, `../../v1/routes/images/${file}.${type}`)
    );
  } else {
    return path.resolve(
      path.join(__dirname, '../../v1/routes/images/fjord.jpeg')
    );
  }
}
function filePathOutput(file?: string, type?: string): string {

  if (file) {
    return path.resolve(
      path.join(__dirname, `../../v1/routes/images/output/${file}.${type}`)
    );
  } else {
    return 'Path Error';
  }
}

function nameGenerator(): string {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let name = '';

  numbers.forEach(number => {

    return name += Math.floor(Math.random() * number);
  });

  return 'stutern' + name;
}

//type Definitions
type src = {
  original?: string
}
type RestP = {
  url?: string;
  id?: number;
  width?: number;
  photographer?: string;
  photographer_url?: string;
  photographer_id?: string;
  src?: src;
};

export type { RestP };
// test if it a string, number or undefined
export default { ConvertToNumber, filePathInput, filePathOutput, nameGenerator };
