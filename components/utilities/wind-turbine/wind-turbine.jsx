import React from 'react'
import { Blade, Turbine } from './turbine-element'

function WindTurbine() {
    return (
        <div className="relative w-11 h-16">
            <Turbine className="wind-turbine">
                <div className="rotor">
                    <Blade className="blade1"></Blade>
                    <Blade className="blade2"></Blade>
                    <Blade className="blade3"></Blade>
                </div>
                <div className="pole"></div>
            </Turbine>
        </div>
    )
}

export default WindTurbine
