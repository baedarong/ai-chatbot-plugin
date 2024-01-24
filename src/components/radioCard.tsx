import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { classNames } from '@root/utils/cssUtil';
import { IModel } from '../data';

interface IRadioCard {
  modelLists: IModel[];
}

export default function RadioCard({ modelLists }: IRadioCard) {
  const [selectedmodelLists, setSelectedModelLists] = useState(modelLists[0]);

  return (
    <RadioGroup value={selectedmodelLists} onChange={setSelectedModelLists}>
      <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">{/* 모델 선택 */}</RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {modelLists.map(modelList => (
          <RadioGroup.Option
            key={modelList.id}
            value={modelList}
            className={({ active }) =>
              classNames(
                active ? 'border-yellow-500 ring-2 ring-yellow-500' : 'border-gray-300',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
              )
            }>
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {modelList.title}
                    </RadioGroup.Label>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-yellow-500')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-yellow-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg',
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
