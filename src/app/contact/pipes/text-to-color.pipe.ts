import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#448AFF';
  colors = {
    'a': '#EF5350',
    'b': '#EC407A',
    'c': '#AB47BC',
    'd': '#7E57C2',
    'e': '#5C6BC0',
    'f': '#42A5F5',
    'g': '#29B6F6',
    'h': '#26C6DA',
    'i': '#26A69A',
    'j': '#66BB6A',
    'k': '#9CCC65',
    'l': '#D4E157',
    'm': '#FFEE58',
    'n': '#FFCA28',
    'o': '#FFA726',
    'p': '#FF7043',
    'q': '#FF1744',
    'r': '#F50057',
    's': '#D500F9',
    't': '#651FFF',
  }
  ;

  transform(value: any, args?: any): any {
    if (value == null || value === '') {
    }
    const firstChar = value.charAt(0).toLowerCase();
      return this.colors[firstChar];
    }
}
