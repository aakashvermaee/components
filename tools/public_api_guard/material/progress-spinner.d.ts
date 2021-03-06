export declare const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS: InjectionToken<MatProgressSpinnerDefaultOptions>;

export declare function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY(): MatProgressSpinnerDefaultOptions;

export declare class MatProgressSpinner extends _MatProgressSpinnerMixinBase implements OnInit, CanColor {
    get _circleRadius(): number;
    get _circleStrokeWidth(): number;
    _elementRef: ElementRef<HTMLElement>;
    _noopAnimations: boolean;
    get _strokeCircumference(): number;
    get _strokeDashOffset(): number | null;
    get _viewBox(): string;
    get diameter(): number;
    set diameter(size: number);
    mode: ProgressSpinnerMode;
    get strokeWidth(): number;
    set strokeWidth(value: number);
    get value(): number;
    set value(newValue: number);
    constructor(_elementRef: ElementRef<HTMLElement>, platform: Platform, _document: any, animationMode: string, defaults?: MatProgressSpinnerDefaultOptions);
    ngOnInit(): void;
    static ngAcceptInputType_diameter: NumberInput;
    static ngAcceptInputType_strokeWidth: NumberInput;
    static ngAcceptInputType_value: NumberInput;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatProgressSpinner, "mat-progress-spinner", ["matProgressSpinner"], { "color": "color"; "diameter": "diameter"; "strokeWidth": "strokeWidth"; "mode": "mode"; "value": "value"; }, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatProgressSpinner, [null, null, { optional: true; }, { optional: true; }, null]>;
}

export interface MatProgressSpinnerDefaultOptions {
    _forceAnimations?: boolean;
    diameter?: number;
    strokeWidth?: number;
}

export declare class MatProgressSpinnerModule {
    static ɵinj: i0.ɵɵInjectorDef<MatProgressSpinnerModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MatProgressSpinnerModule, [typeof i1.MatProgressSpinner, typeof i1.MatSpinner], [typeof i2.MatCommonModule, typeof i3.CommonModule], [typeof i1.MatProgressSpinner, typeof i1.MatSpinner, typeof i2.MatCommonModule]>;
}

export declare class MatSpinner extends MatProgressSpinner {
    constructor(elementRef: ElementRef<HTMLElement>, platform: Platform, document: any, animationMode: string, defaults?: MatProgressSpinnerDefaultOptions);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatSpinner, "mat-spinner", never, { "color": "color"; }, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatSpinner, [null, null, { optional: true; }, { optional: true; }, null]>;
}

export declare type ProgressSpinnerMode = 'determinate' | 'indeterminate';
