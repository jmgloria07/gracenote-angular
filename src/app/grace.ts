import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Grace {
    
    constructor (private _id?: number, private _text?: string, private _opening?: Opening) {

    }    

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get opening(): Opening {
        return this._opening;
    }
    public set opening(value: Opening) {
        this._opening = value;
    }

    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }

    // public set graceForm(value: GraceForm) {
    //     this._graceForm = value;
    // }
    // public get graceForm() {
    //     if (!this._graceForm) {
    //         //create a default graceform
    //         this._graceForm = 
    //     }
        
    //     return this._graceForm;
    // }
}

export class Opening {

    constructor (private _id?: number, private _displayText?: string) {

    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get displayText(): string {
        return this._displayText;
    }
    public set displayText(value: string) {
        this._displayText = value;
    }

}

export class GraceForm extends FormGroup {
    
    public static readonly DEFAULT_GRACE_FORM = new GraceForm(
        new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ]),
        new FormControl('', [
          Validators.required
        ])
    ); 
    
    constructor(private _opening: FormControl, private _displayText: FormControl) {
        super({
            "opening" : _opening,
            "displayText" : _displayText
        });
    }

    public set opening(value: FormControl) {
        this._opening = value;
    }

    public get opening() {
        return this._opening;
    }

    public set displayText(value: FormControl) {
        this._displayText = value;
    }

    public get displayText() {
        return this._displayText;
    }
}

