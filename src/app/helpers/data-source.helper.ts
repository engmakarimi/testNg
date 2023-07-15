import { MatTableDataSource } from '@angular/material/table';

export class DataSourceHelper<T> {
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<T>;
  public recordCount: number;
  public noData: T[] = [<T>{}];
  public selectedRow: T;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }
}
