import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  inputArray='Your Array = ';
  outputValues='Output = ';
  private splitText(by:string)
  {
    
  }
  claculateNoPairs(array:string) 
  {
    this.inputArray='Your Array = ';
    this.outputValues='Output = '
    console.log(array);
    //throw new Error('Method not implemented.');
    this.inputArray+=(array);

    let splitStrings:string[]=array.split(',');

    let splitVals:number[]=[];
    for(let i=0;i<splitStrings.length;i++)
    {
      splitVals.push(Number(splitStrings[i]));
    }
    console.log(splitStrings);
    console.log(splitVals);

    var outputString:string='';
    for(var i=0;i<splitVals.length;i++)
    {
      if(splitVals[i]===-1)
      {
        continue;
      }
      for(var j=i+1;j<splitVals.length;j++)
      {
        if(splitVals[i]===splitVals[j])
        {
          splitVals[i]=-1;
          splitVals[j]=-1;
          break;
        }
      }
    }
    console.log(splitVals);

    for(let i=0;i<splitVals.length;i++)
    {
      outputString+=' ['+i.toString()+']=';
      if(splitVals[i]===-1)
        outputString+='p';
      else
        outputString+=splitVals[i].toString();
    
    }

    this.outputValues+=outputString;

  }

}
