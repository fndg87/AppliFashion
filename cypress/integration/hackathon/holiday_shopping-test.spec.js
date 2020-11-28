/// <reference types="cypress" />
import {TestUtils} from "./Utils";

describe('Holiday Shopping - Test suite', () => {

    before(() => {
        cy.eyesOpen({
            appName: 'AppliFashion'
        });
    });
    after(() => {
        cy.eyesClose();
    });

    beforeEach(() => {
        cy.visit(new TestUtils().getEnvironmentURL());
    });

    it('main page test', () => {
        cy.eyesCheckWindow({
            tag: 'main page',
            testName: 'Test 1',
            target: 'window',
            fully: true
        });
    });

    it('filter product grid', () => {
        // selecting black
        // App Name: “AppliFashion”
        // Test name: “Test 2”
        // Step name: “filter by color”
        cy.get('#SPAN__checkmark__107').click();
        cy.get('#filterBtn').click();
        cy.eyesCheckWindow({
            tag: 'filter by color',
            testName: 'Test 2',
            target: 'region',
            selector: '#product_grid'
        });
    });

    it('product details.', () => {
        //---------------------------------------

        // Use: App Name: “AppliFashion”,
        // Test name: “Test 3”,
        // Step name: “product details”
        cy.get('#DIV__griditem__211').click();
        cy.eyesCheckWindow({
            tag: 'product details',
            testName: 'Test 3',
            target: 'window',
            fully: true
        });

    });

});