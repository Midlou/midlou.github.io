import React from "react";
import { Dialog } from '@headlessui/react';
import If from "../conditionals/if";
import Button from "../buttons/button";

const Modal = ({ isOpen, setIsOpen, title = null, description = null, children = "" }) => {
	return <div className="flex items-center justify-center min-h-screen">
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="relative bg-white rounded max-w-sm mx-auto p-8">
				<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

				<If render={title} body={() => <Dialog.Title className="text-xl">{title}</Dialog.Title>} />

				<If render={title} body={() => {
					return <Dialog.Description>
						{description}
					</Dialog.Description>
				}} />

				{children}

				<Button label={"Close"} onClick={() => setIsOpen(false)} />
			</div>

		</Dialog>
	</div>
}

export default Modal;
