import { MetadataStore } from 'breeze-client';
import { Injectable } from '@angular/core';
import { RegistrationHelper } from '../regHelper';
import { Product } from './product';

@Injectable()
export class ModelsRegistrationHelper implements RegistrationHelper {
    register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('Product', Product);
        }
}
