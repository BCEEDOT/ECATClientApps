import { MetadataStore } from 'breeze-client';
import { Injectable } from '@angular/core';
import { RegistrationHelper } from '../regHelper';
import { ValueItem } from './valueItem';

@Injectable()
export class ModelsRegistrationHelper implements RegistrationHelper {
    register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('ValueItem', ValueItem);
        }
}
