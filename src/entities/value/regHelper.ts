import { MetadataStore } from 'breeze-client';
import { Injectable } from '@angular/core';
import { _RegHelper } from '../_regHelper';
import { ValueItem } from './valueItem';

@Injectable()
export class ModelsRegistrationHelper implements _RegHelper {
    register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('ValueItem', ValueItem);
        }
}
