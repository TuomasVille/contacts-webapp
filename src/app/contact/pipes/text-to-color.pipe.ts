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
    'j': '#1DE9B6',
    'k': '#00E676',
    'l': '#76FF03',
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
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
      return this.colors[firstChar];
    }
}
