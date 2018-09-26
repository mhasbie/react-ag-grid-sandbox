import '../assets/css/bootstrap.min.css';
import '../assets/css/ag-grid.css';
import '../assets/css/ag-theme-material.css';
import '../assets/css/theme-material.css';
import '../assets/css/Typeahead.css';
// import '../assets/css/ClearButton.css';
// import '../assets/css/Loader.css';
// import '../assets/css/Token.css';

import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { SelectFilter, SelectFloatingFilter, MultiSelectFilter, MultiSelectFloatingFilter } from 'react-aggrid-framework-components';
// import Excel from 'exceljs';
// import xl from 'excel4nodes';


class AgGrid extends Component {
	render() {
		const bool = {
			true: 'Yes',
			false: 'No'
		};
		 
		const fruit = {
			lemon: 'Lemon',
			orange: 'Orange',
			grapefruit: 'Grapefruit',
			apple: 'Apple',
			mangosteen: 'Mangosteen',
			durian: 'Durian',
		};
		 
		const options = {
			domLayout: 'autoHeight',
			enableColResize: true,
			enableFilter: true,
			columnDefs: [
				{
					field: 'fruit',
					headerName: 'Fruit',
					filter: 'multiSelectFilter',
					filterParams: { 
						options: fruit
					},
					floatingFilterComponent: 'multiSelectFloatingFilter',
					floatingFilterComponentParams: { 
						options: fruit,
						suppressFilterButton: true
					}
				},
				{
					field: 'citrus',
					headerName: 'Citrus ?',
					valueFormatter: ({ value }) => (bool[value]),
					filter: 'selectFilter',
					filterParams: {
						options: bool
					},
					floatingFilterComponent: 'selectFloatingFilter',
					floatingFilterComponentParams: {
						options: bool,
						suppressFilterButton: true
					}
				}
			],
			rowData: [
				{ fruit: 'lemon', citrus: true },
				{ fruit: 'orange', citrus: true },
				{ fruit: 'grapefruit', citrus: true },
				{ fruit: 'apple', citrus: false },
				{ fruit: 'mangosteen', citrus: false },
				{ fruit: 'durian', citrus: false },
			],
			gridOptions: {
				context: {
					componentParent: this,
				},
				floatingFilter: true
			},
			frameworkComponents: {
				selectFilter: SelectFilter,
				selectFloatingFilter: SelectFloatingFilter,
				multiSelectFilter: MultiSelectFilter,
				multiSelectFloatingFilter: MultiSelectFloatingFilter,
			}
		};
		return (
			<div className="ag-theme-material" style={{ width: '100%', minHeight: '200px' }}>
				<AgGridReact {...options} />
			</div>
		);
	}
}

export default AgGrid;    
