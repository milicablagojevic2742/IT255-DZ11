/**
 * Created by Blagojevic Milica on 18-May-17.
 */
import {Pipe} from '@angular/core';

@Pipe({
    name: 'SearchImenaDelovi'
})

export class DeloviImenaSearch {
    transform(value: Object[], anotherValue: string): Object[] {
        if (value == null) {
            return null;
        }
        if (anotherValue !== undefined) {
            return value.filter((item: Object) =>
            item['name'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1
            );
        } else {
            return value;
        }
    }
}

