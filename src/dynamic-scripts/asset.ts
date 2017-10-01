import * as fs from 'fs';
import * as ts from 'typescript';
import Project from './project';
import Path from './path';

export default class Asset {
    protected _path: Path;
    protected _rawContent: string;
    protected _project: Project;

    constructor (file: Path, project: Project) {
        this._path = file;
        this._project = project;
        this.readFile();
    }

    get path (): Path {
        return this._path;
    }

    readFile () {
        this._rawContent = fs.readFileSync(
            this._path.absolutePath, 
            { encoding: 'utf8' }
        );
    }
    
}