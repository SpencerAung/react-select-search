import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { countries, fontStacks, friends } from './data';
import Value from '../src/Components/Value';
import Context from '../src/Context';
import './helpers/setup-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createClasses from '../src/lib/createClasses';

const classes = createClasses('select-search');
const theme = {
    classes,
    renderers: {},
};

describe('Test Value component', () => {
    test('Renders input element', () => {
        const wrapper = mount((
            <Context.Provider value={theme}>
                <Value value="" />
            </Context.Provider>
        ));

        expect(wrapper.find('input').length).toBe(1);
    });

    test('Input renders passed input props', () => {
        const wrapper = mount((
            <Context.Provider value={theme}>
                <Value value="" className={classes.input} />
            </Context.Provider>
        ));

        expect(wrapper.find('input').hasClass(classes.input)).toEqual(true);
    });

    test('Uses custom renderer', () => {
        const themeWithRenderer = {
            classes,
            renderers: {
                value: (inputProps, ref) => (
                    <div className="wrapper">
                        <input {...inputProps} ref={ref} />
                    </div>
                ),
            },
        };

        const wrapper = mount((
            <Context.Provider value={themeWithRenderer}>
                <Value value="" className={classes.input} />
            </Context.Provider>
        ));

        expect(wrapper.find('input').hasClass(classes.input)).toEqual(true);
        expect(wrapper.find('.wrapper').length).toEqual(1);
        expect(wrapper.find('div > input').length).toEqual(1);
    });
});
