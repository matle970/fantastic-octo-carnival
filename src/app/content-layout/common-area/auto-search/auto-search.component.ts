import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FilterComponent } from '../filter/filter.component';

export interface StateGroup {
	type: string;
	names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
	const filterValue = value.toLowerCase();

	return opt.filter(item => item.toLowerCase().indexOf(filterValue) !== -1);
};

/**
 * @title Option groups autocomplete
 */

@Component({
	selector: 'app-auto-search',
	templateUrl: './auto-search.component.html',
	styleUrls: ['./auto-search.component.scss'],
})

export class AutoSearchComponent implements OnInit, OnChanges {

	@Input() keywordList: FilterComponent;
	keyword: any;
	@Output('getCompleteKeyword') getCompleteKeyword = new EventEmitter();
	jeweltest: any;
	stateForm: FormGroup = this._formBuilder.group({
		stateGroup: '',
	});

	stateGroups: StateGroup[] = [{
		type: '集團名稱',
		names: []
	}, {
		type: '客戶名稱',
		names: ['California', 'Colorado', 'Connecticut']
	}, {
		type: '客戶 ID',
		names: ['Delaware']
	}];

	stateGroupOptions: Observable<StateGroup[]>;

	constructor(private _formBuilder: FormBuilder/*, private _keywordService: KeywordService*/, private el: ElementRef) {
	}

	ngOnInit() { }

	ngOnChanges(SimpleChanges: any) {
		if (this.keywordList) {
			this.getKeyWordList();

			this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
				.pipe(
					startWith(''),
					map(value => this._filterGroup(value))
				);

			this.keyword = this.stateForm.get('stateGroup').value;
		}
	}

	highlightFiltered(gname: string) {
		const inputKeyword = this.stateForm.get('stateGroup').value;
		return gname.replace(inputKeyword, `<span class="autocomplete-heighlight">${inputKeyword}</span>`);
	}

	onChoose(item: any) {
		const inputKeyword = item;
		this.getCompleteKeyword.emit(inputKeyword);
	}
	onKey(event: any) {
		let inputKeyword = "";
		inputKeyword = this.stateForm.get('stateGroup').value;
		this.getCompleteKeyword.emit(inputKeyword);
	}

	getOptionText(group) {
		return group.names;
	}

	getKeyWordList() {
		this.stateGroups = [
			{
				type: '集團名稱',
				names: this.keywordList[0].list
			},
			{
				type: '客戶名稱',
				names: this.keywordList[2].list
			},
			{
				type: '客戶 ID',
				names: this.keywordList[1].list
			},
		];
	}

	private _filterGroup(value): StateGroup[] {
		if (value.names) {
			return this.stateGroups
				.map(group => ({ type: group.type, names: _filter(group.names, value.names) }))
				.filter(group => group.names.length > 0);
		}
		return this.stateGroups;
	}
}
